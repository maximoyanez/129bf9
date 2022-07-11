export const DOTS = "...";

function usePagination( {currentPage, totalCount, pageSize, totalPages} ){

  if ( totalPages <= 3 ){
    let arr = []
    for (let i = 1; i <= totalPages; i++){
      arr.push(i);
    }
    return arr;
  }

  if ( (currentPage === 1 || currentPage === 2) && totalPages > 3 ){
    return [1, 2, 3, DOTS, totalPages];
  }

  if ( currentPage > 2 && (currentPage + 1) < totalPages ){
    return [1, DOTS, currentPage - 1, currentPage, currentPage + 1, DOTS, totalPages];
  }

  if ( currentPage + 1 === totalPages ){
    return [1, DOTS, currentPage - 1, currentPage, currentPage + 1];
  }

  if ( currentPage === totalPages ){
    return [1, DOTS, currentPage - 2, currentPage -1, currentPage];
  }

}

export default usePagination;
