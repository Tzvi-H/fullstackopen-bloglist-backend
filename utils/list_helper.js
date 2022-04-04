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

const mostBlogs = blogs => {
  if (blogs.length === 0) return {};

  const frequency = { [blogs[0].author]: 1 }

  let authorWithMostBlogs = {
    author: blogs[0].author,
    blogs: 1,
  }

  blogs.slice(1).forEach(blog => {
    frequency[blog.author] = frequency[blog.author] || 0;
    frequency[blog.author]++;
    if (frequency[blog.author] > authorWithMostBlogs.blogs) {
      authorWithMostBlogs = {
        author: blog.author,
        blogs: frequency[blog.author]
      }
    }
  })

  return authorWithMostBlogs;
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs
}

console.log(mostBlogs([]))