  const getContent  = (...items) => items.map((item) => ({
    title: item.querySelector('title').textContent,
    description: item.querySelector('description').textContent,
    link: item.querySelector('link').textContent,
  }));
   
  
  const parse = (contents) => {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(contents, 'application/xml');

    const [feeds, ...posts] = getContent(htmlDoc, ...htmlDoc.querySelectorAll('item'));
    
    return {feeds, posts};
  }
  
  export default (response) => {
    const { contents } = response.data;
    try {
      return parse(contents);
    } catch (error) {
      error.message = 'errors.resourceNotContain';
      throw error;
    }
  };