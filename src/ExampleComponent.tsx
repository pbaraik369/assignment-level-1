import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../src/store/reducers";
import NewsCard from "./NewsCard";
import { Box, Stack } from "@mui/material";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import "./ExampleComponent.css";

interface Category {
  name: string;
  subcategories: Subcategory[];
}

interface Subcategory {
  name: string;
  newsItems: NewsItem[];
}

interface NewsItem {
  id: number;
  title: string;
  body: string;
}

const ExampleComponent: React.FC = () => {
  const dispatch = useDispatch();
  const categories: Category[] = useSelector(
    (state: RootState) => state.categories
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const posts: NewsItem[] = response.data;
        console.log(posts);

        // Assign news items to categories and subcategories
        const categories: Category[] = [
          {
            name: "Cat 1",
            subcategories: [
              {
                name: "Subcat 1_1",
                newsItems: posts.filter((post, index) => index % 3 === 1),
              },
              {
                name: "Subcat 1_2",
                newsItems: posts.filter((post, index) => index % 3 === 2),
              },
              {
                name: "Subcat 1_3",
                newsItems: posts.filter((post, index) => index % 3 === 3),
              },
            ],
          },
          {
            name: "Cat 2",
            subcategories: [
              {
                name: "Subcat 2_1",
                newsItems: posts.filter((post, index) => index % 3 === 1),
              },
              {
                name: "Subcat 2_2",
                newsItems: posts.filter((post, index) => index % 3 === 2),
              },
            ],
          },
        ];

        // Dispatch an action to store the categories in your Redux store
        dispatch({ type: "SET_CATEGORIES", payload: categories });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    // Your component JSX
    <Stack spacing={3} direction="row">
      <Box>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          {categories.map((category) => (
            <TreeItem
              className="category__name"
              nodeId={category.name}
              label={category.name}
            >
              <div key={category.name}>
                {/* <h2>{category.name}</h2> */}
                {category.subcategories.map((subcategory) => (
                  <TreeItem nodeId={subcategory.name} label={subcategory.name}>
                    <div key={subcategory.name}>
                      {/* <h4>{subcategory.name}</h4> */}
                      {subcategory.newsItems.map((newsItem) => (
                        <NewsCard
                          key={newsItem.id}
                          heading={newsItem.title}
                          description={newsItem.body}
                        />
                      ))}
                    </div>
                  </TreeItem>
                ))}
              </div>
            </TreeItem>
          ))}
        </TreeView>
      </Box>
    </Stack>
  );
};

export default ExampleComponent;
