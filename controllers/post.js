const Post = require('../models/post');
const { errorMessage } = require('../utils/enum');

/**
 * 取得全部貼文
 * @returns {array}
 */
const getPosts = async () => await Post.find().sort({ createdAt: -1 });

/**
 * 新增貼文
 * @param {string} payload 傳入參數
 * @returns {object} 新增的貼文資訊
 */
const postOnePost = async (payload) => {
  try {
    const { userName, userPhoto, content } = payload;
    const post = await Post.create({ userName, userPhoto, content });
    return post;
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * 編輯特定的貼文
 * @param {string} postId 貼文編號
 * @param {string} payload 傳入參數
 * @returns {object} 編輯的貼文資訊
 */
const patchPost = async ({ postId, payload }) => {
  try {
    const post = await Post.findById(postId);
    if (!(post && postId)) throw errorMessage.format;

    await Post.findByIdAndUpdate(postId, payload);
    return await Post.findById(postId);
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * 刪除全部貼文
 */
const deletePosts = async () => {
  await Post.deleteMany({});
};

/**
 * 刪除指定的貼文
 * @param {string} postId 貼文編號
 */
const deletePost = async (postId) => {
  try {
    const post = await Post.findById(postId);
    if (!(post && postId)) throw errorMessage.format;
    await Post.findByIdAndDelete(postId);
  } catch (error) {
    return Promise.reject(error);
  }
};

module.exports = {
  getPosts,
  postOnePost,
  patchPost,
  deletePosts,
  deletePost,
};
