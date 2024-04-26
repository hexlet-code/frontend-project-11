const getFeed = (item) =>  ({
    title: item.querySelector('title').textContent,
    description: item.querySelector('description').textContent,
    link: item.querySelector('link').textContent,
  });
  
  const getPosts = (doc) => [...doc.querySelectorAll('item')].map((item) => ({
    title: item.querySelector('title').textContent,
    description: item.querySelector('description').textContent,
    link: item.querySelector('link').textContent,
  }));
  
  
  const parse = (contents) => {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(contents, 'application/xml');
    
    const posts = getPosts(htmlDoc);
    const feeds = getFeed(htmlDoc);
    
    return {feeds, posts};
  }
  
  export default (response) => {
    const { contents } = response.data;
    try {
      return parse(contents);
    } catch (error) {
      error.name = 'rssError';
      throw error;
    }
  };