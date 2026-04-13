
import { useState } from 'react';
import { blogPosts } from '../../../mocks/blogPosts';

export default function BlogListSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <a href={`/blog/${post.id}`} className="block">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-emerald-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-emerald-600 font-semibold hover:text-emerald-600-700 transition-colors cursor-pointer">
                    Read More
                    <i className="ri-arrow-right-line ml-2"></i>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center flex-wrap gap-1 sm:gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg font-semibold transition-all cursor-pointer whitespace-nowrap text-xs sm:text-sm ${
                currentPage === number
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}