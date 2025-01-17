import React from "react";
import STYLE from "./style";
import TrackContainer from "./ui/TrackingImageContainer";

const TrackingImageTab = ({
  sharingType,
  trackData,
  length,
  modifyMode,
  handle,
}) => {
  if (length === 0) {
    return <STYLE.EmptyMessage>게시물이 없습니다.</STYLE.EmptyMessage>;
  }
  const filteredTracks =
    trackData?.filter((track) => track.sharing === sharingType) || [];
  return (
    <STYLE.PostGrid>
      {filteredTracks.map((track, index) => {
        const isLast = index === filteredTracks.length - 1;
        return (
          <TrackContainer
            key={track.id}
            track={track}
            modifyMode={modifyMode}
            handle={handle}
            isLast={isLast}
          />
        );
      })}
    </STYLE.PostGrid>
  );
};

export default TrackingImageTab;
