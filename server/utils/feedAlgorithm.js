const sortPosts = (posts) => {
    // TODO: Implement feed sorting algorithm
    return posts.sort((a, b) => b.waCount - a.waCount);
};

module.exports = { sortPosts };