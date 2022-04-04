const dummy = blogs => {
  return 1
}

const totalLikes = blogs => {
  return blogs.reduce((sum, blog) => {
    return sum + blog.likes;
  }, 0)
}

const favoriteBlog = blogs => {
  if (blogs.length === 0) return {};

  const favoriteBlog = blogs.reduce((max, curr) => {
    return curr.likes > max.likes ? curr : max;
  })

  return {
    title: favoriteBlog.title,
    author: favoriteBlog.author,
    likes: favoriteBlog.likes
  }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}