import { MatPaginatorIntl } from '@angular/material/paginator';
const matRangeLabel = (page: number, pageSize: number, length: number) => {
  let ofValue = '';
  if (localStorage.getItem('language') === 'en') {
    ofValue = 'of';
  } else if (localStorage.getItem('language') === 'fr') {
    ofValue = 'de';
  } else if (localStorage.getItem('language') === 'nl') {
    ofValue = 'von';
  } else if (localStorage.getItem('language') === 'jp') {
    ofValue = 'の';
  }
  if (length == 0 || pageSize == 0) {
    return `0 ${ofValue} ${length}`;
  }

  length = Math.max(length, 0);

  const startIndex = page * pageSize;

  const endIndex =
    startIndex < length
      ? Math.min(startIndex + pageSize, length)
      : startIndex + pageSize;
  return `${startIndex + 1} - ${endIndex} ${ofValue} ${length}`;
};

export function getMatPaginatorIntl() {
  let itemsPerPage = 'Items per page:';
  let nextPage = 'Next page';
  let previousPage = 'Previous page';
  if (localStorage.getItem('language') === 'en') {
    itemsPerPage = 'Items per page:';
    nextPage = 'Next page';
    previousPage = 'Previous page';
  } else if (localStorage.getItem('language') === 'fr') {
    itemsPerPage = 'Objets par page:';
    nextPage = 'Page suivante';
    previousPage = 'Page précédente';
  } else if (localStorage.getItem('language') === 'nl') {
    itemsPerPage = 'Objekte pro Seite:';
    nextPage = 'Nächste Seite';
    previousPage = 'Vorherige Seite';
  } else if (localStorage.getItem('language') === 'jp') {
    itemsPerPage = '1ページあたりのアイテム数：';
    nextPage = '次のページ';
    previousPage = '前のページ';
  }
  const paginatorIntl = new MatPaginatorIntl();
  paginatorIntl.itemsPerPageLabel = `${itemsPerPage}`;
  paginatorIntl.nextPageLabel = `${nextPage}`;
  paginatorIntl.previousPageLabel = `${previousPage}`;
  paginatorIntl.getRangeLabel = matRangeLabel;
  return paginatorIntl;
}
