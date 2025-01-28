import { useEffect, useState, useCallback } from "react";
import {
  calculateTrackingLength,
  extractIdxLists,
  filterTrackData,
} from "../../../lib/profileUtil";

const useUpdateTrackingImage = (
  displayTrackingImage,
  setDisplayTrackingImage,
  setModifyIdxList,
  modifyMode
) => {
  const [memorizedTrackData, setMemorizedTrackData] = useState(null);

  const [changeTrackingImageDataLength, setChangeTrackingLength] = useState({
    save: 0,
    share: 0,
  });

  useEffect(() => {
    if (modifyMode) {
      setMemorizedTrackData(displayTrackingImage);
    }
  }, [modifyMode]);

  const resetSelection = useCallback(() => {
    setModifyIdxList([]);
    setDisplayTrackingImage(memorizedTrackData);
  }, [memorizedTrackData]);

  const handleModifyTrack = useCallback((modifyIdxList, isToShare) => {
    const { idxToShare, idxToNotShare } = extractIdxLists(modifyIdxList);
    setModifyIdxList([]);
    setChangeTrackingLength((prev) => {
      if (isToShare) {
        return {
          ...prev,
          save: calculateTrackingLength(prev.save, idxToShare, idxToNotShare),
        };
      } else {
        return {
          ...prev,
          share: calculateTrackingLength(prev.share, idxToShare, idxToNotShare),
        };
      }
    });
  }, []);
  const handleDeleteTrack = useCallback((modifyIdxList) => {
    const saveCount = modifyIdxList.filter((item) => !item.sharing).length; // sharing이 false인 경우 save
    const shareCount = modifyIdxList.filter((item) => item.sharing).length; // sharing이 true인 경우 share
    const idxList = modifyIdxList.map((item) => item.idx);
    setChangeTrackingLength((prev) => ({
      save: prev.save - saveCount,
      share: prev.share - shareCount,
    }));
    setDisplayTrackingImage((prev) => filterTrackData(prev, idxList));
    setModifyIdxList([]);
  }, []);

  return [
    changeTrackingImageDataLength,
    resetSelection,
    handleModifyTrack,
    handleDeleteTrack,
  ];
};

export default useUpdateTrackingImage;
