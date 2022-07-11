import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React, {useState} from "react";
import blogs from "../data/blogs.json";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);

  const [init, setInit] = useState(0);
  const [top, setTop] = useState(pageSize);

  const currentPaginationData = blogs.posts.slice(init, top);


  const updateRowsPerPage = (e) => {
    setPageSize(parseInt(e));
  };


  const updatePage = (e) => {
    setPage(e);
    
    if (e === 1){
      setInit(0);
      setTop(pageSize);
    }
    else{
      setInit((e-1)*(pageSize));
      setTop(pageSize * e);
    }
  };

  

  return (
    <div>
      <Pagination
        currentPage={page}
        totalCount={blogs.posts.length}
        pageSize={pageSize}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />


      <ul
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >

        {
          blogs.posts.length === 0 ?
          (
            <BlogPost
              key = {0}
              id = {0}
              author = "Empty"
              title = "No blogs posted"
              excerpt = ""
              featureImage = "Empty"
            />
          )
          :
          (
            currentPaginationData.map((blog) => (
              <BlogPost
                key={blog.id}
                id={blog.id}
                author={blog.author}
                title={blog.title}
                excerpt={blog.excerpt}
                featureImage={blog.image}
              />
            ))
          )

        }
      </ul>



    </div>
  );
}

export default BlogList;
