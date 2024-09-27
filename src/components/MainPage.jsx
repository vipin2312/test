import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import FilterSidebar from "./FilterSidebar";
import JobList from "./JobList";
import "./MainPage.css";
import Filters from "./Filters";

const MainPage = () => {
  return (
    <div className="main-page">
      <Header />
      <SearchBar />
      <div className="content">
        <FilterSidebar />
        <div class="content-right">
          <Filters />
          <JobList />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
