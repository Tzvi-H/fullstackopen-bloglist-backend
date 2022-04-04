const dummy = () => {
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

  const blogFrequency = { [blogs[0].author]: 1 }

  let authorWithMostBlogs = {
    author: blogs[0].author,
    blogs: 1,
  }

  blogs.slice(1).forEach(blog => {
    blogFrequency[blog.author] = blogFrequency[blog.author] || 0;
    blogFrequency[blog.author]++;
    if (blogFrequency[blog.author] > authorWithMostBlogs.blogs) {
      authorWithMostBlogs = {
        author: blog.author,
        blogs: blogFrequency[blog.author]
      }
    }
  })

  return authorWithMostBlogs;
}

const mostLikes = blogs => {
  if (blogs.length === 0) return {};

  const likeFrequency = { [blogs[0].author]: blogs[0].likes }

  let authorWithMostLikes = {
    author: blogs[0].author,
    likes: blogs[0].likes,
  }

  blogs.slice(1).forEach(blog => {
    likeFrequency[blog.author] = likeFrequency[blog.author] || 0;
    likeFrequency[blog.author]++;
    if (likeFrequency[blog.author] > authorWithMostLikes.likes) {
      authorWithMostLikes = {
        author: blog.author,
        likes: likeFrequency[blog.author]
      }
    }
  })

  return authorWithMostLikes;
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}

console.log(mostBlogs([]))