export const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };
  
  export const truncateText = (text, length) => {
    return text.length > length ? text.substring(0, length) + '...' : text;
  };
  