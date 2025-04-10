import { Box, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";

interface ChildProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const SearchBox: React.FC<ChildProps> = ({ setSearch, setPage }) => {
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    const delay = setTimeout(() => {
      setSearch(inputValue.trim());
      setPage(1);
    }, 500);

    return () => clearTimeout(delay);
  }, [inputValue]);

  const searchHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(e.target.value);
  };

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 8px",
        display: "flex",
        alignItems: "center",
        maxWidth: 300,
        direction: "ltr",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search characters name"
        inputProps={{ "aria-label": "Search characters name" }}
        onChange={(e) => searchHandler(e)}
      />
      <Paper elevation={0} sx={{ p: "5px" }} aria-label="search">
        <SearchIcon />
      </Paper>
    </Paper>
  );
};

export default SearchBox;
