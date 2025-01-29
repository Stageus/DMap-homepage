import STYLE from "./style";
import useSearchHistory from "./model/useSearchHistory";
import { useNavigate } from "react-router-dom";

const SearchHistory = () => {
  const [listItems, addSearchHistory, deleteSearchHistory] = useSearchHistory();
  const navigate = useNavigate();
  return (
    <STYLE.Container>
      <STYLE.List>
        {listItems.length > 0 ? (
          listItems.map((item) => (
            <STYLE.ListBox>
              <STYLE.ListItem
                onClick={() => {
                  addSearchHistory(item);
                  navigate(`?text=${item.searchInputText}`);
                }}>
                {item.searchInputText}
              </STYLE.ListItem>
              <STYLE.ListDeleteButton
                onClick={() => {
                  deleteSearchHistory(item);
                }}>
                &times;
              </STYLE.ListDeleteButton>
            </STYLE.ListBox>
          ))
        ) : (
          <STYLE.ListItem>검색기록이 없습니다</STYLE.ListItem>
        )}
      </STYLE.List>
    </STYLE.Container>
  );
};

export default SearchHistory;
