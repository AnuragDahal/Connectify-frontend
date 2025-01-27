const Post = ({ title, content, posted_by, images, likes, comments }) => {
  return (
    <>
      <div className="flex bg-white max-h-svh shadow-lg rounded-lg mx-4 md:mx-auto max-w-md md:max-w-2xl ">
        <div className="flex items-start h-auto px-4 py-6">
          <img
            className="w-12 h-12 rounded-full object-cover mr-4 shadow"
            src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="avatar"
          />
          <div className="">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900 -mt-1">
                {posted_by}{" "}
              </h2>
            </div>
            <p className="mt-6 text-gray-700 text-lg font-semibold">{title}</p>
            <p className="mt-6 text-gray-700 text-sm">{content}</p>
            <div className="w-full px-4 h-[300px] mr-5 pb-3">
              <img
                className="object-contain aspect-square h-[300px] w-full "
                src={images[0]}
              />
            </div>
            <div className="mt-4 flex justify-around items-center">
              <div className="flex mr-2 text-gray-700 text-sm ">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span>{likes.length}</span>
              </div>
              <div className="flex text-gray-700 text-sm">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
                <span>{comments.length}</span>
              </div>
              <div className="flex text-gray-700 text-sm mr-4">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
                <span className="font-medium">share</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;
