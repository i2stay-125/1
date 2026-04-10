import { useParams } from 'react-router-dom';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { blogPosts } from '../../../mocks/blogPosts';
import { useSEO, generateBlogPostSchema, generateBreadcrumbSchema } from '../../../utils/seo';

export default function BlogDetailPage() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <a href="/blog" className="text-emerald-600 hover:text-emerald-700 font-semibold">
            Back to Blog List
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.id}` }
  ]);

  const blogSchema = generateBlogPostSchema(post);

  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [breadcrumbSchema, blogSchema]
  };

  useSEO({
    title: `${post.title} - KungfuBuy Blog`,
    description: post.excerpt,
    keywords: `${post.tags.join(',')},KungfuBuy,dropshipping`,
    canonical: `/blog/${post.id}`,
    ogType: 'article',
    ogImage: post.image,
    schema: combinedSchema
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center text-sm text-gray-600">
              <a href="/" className="hover:text-emerald-600 transition-colors">Home</a>
              <i className="ri-arrow-right-s-line mx-2"></i>
              <a href="/blog" className="hover:text-emerald-600 transition-colors">Blog</a>
              <i className="ri-arrow-right-s-line mx-2"></i>
              <span className="text-gray-900">{post.title}</span>
            </div>
          </div>
        </div>

        {/* Article Header */}
        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center text-xs sm:text-sm md:text-base text-gray-600 mb-8 gap-2">
                <div className="flex items-center">
                  <i className="ri-calendar-line mr-2"></i>
                  <span>{post.date}</span>
                </div>
                <span className="mx-4">|</span>
                <div className="flex items-center">
                  <i className="ri-time-line mr-2"></i>
                  <span>{post.readTime}</span>
                </div>
                <span className="mx-4">|</span>
                <div className="flex items-center">
                  <i className="ri-price-tag-3-line mr-2"></i>
                  <span>{post.category}</span>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-8 sm:mb-12 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-48 sm:h-64 md:h-96 object-cover object-top"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                {post.excerpt}
              </div>

              {post.content.map((section, index) => (
                <div key={index} className="mb-8 sm:mb-10">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
                      {section.list.map((item, lIndex) => (
                        <li key={lIndex}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-8 sm:mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full text-sm font-semibold"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-8 sm:mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Share This Article</h3>
              <div className="flex gap-2 sm:gap-4">
                <button className="w-12 h-12 flex items-center justify-center bg-emerald-600 text-white rounded-full hover:bg-emerald-600 transition-colors cursor-pointer">
                  <i className="ri-facebook-fill text-xl"></i>
                </button>
                <button className="w-12 h-12 flex items-center justify-center bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors cursor-pointer">
                  <i className="ri-twitter-fill text-xl"></i>
                </button>
                <button className="w-12 h-12 flex items-center justify-center bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors cursor-pointer">
                  <i className="ri-linkedin-fill text-xl"></i>
                </button>
                <button className="w-12 h-12 flex items-center justify-center bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors cursor-pointer">
                  <i className="ri-mail-line text-xl"></i>
                </button>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-gray-200">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {blogPosts
                  .filter(p => p.id !== post.id && p.category === post.category)
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <a 
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.id}`}
                      className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="relative h-32 sm:h-48 overflow-hidden">
                        <img 
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4 sm:p-6">
                        <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                          {relatedPost.title}
                        </h4>
                        <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </a>
                  ))}
              </div>
            </div>

            {/* Back to Blog */}
            <div className="mt-8 sm:mt-12 text-center">
              <a 
                href="/blog"
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-emerald-600 text-white rounded-lg font-semibold text-sm sm:text-base hover:bg-emerald-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-arrow-left-line mr-2"></i>
                Back to Blog List
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

