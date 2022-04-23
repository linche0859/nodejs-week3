const express = require('express');
const {
  getPosts,
  postOnePost,
  patchPost,
  deletePosts,
  deletePost,
} = require('../controllers/post');
const { getHttpResponseContent } = require('../utils/response');
const router = express.Router();

// 取得全部貼文
router.get('/', async (req, res) => {
  res.json(getHttpResponseContent({ data: await getPosts() }));
});

// 新增貼文
router.post('/', async (req, res) => {
  try {
    const { body } = req;
    res.json(getHttpResponseContent({ data: await postOnePost(body) }));
  } catch (error) {
    res
      .status(400)
      .json(getHttpResponseContent({ success: false, data: error }));
  }
});

// 編輯特定的貼文
router.patch('/:postId', async (req, res) => {
  try {
    const {
      params: { postId },
      body,
    } = req;
    res.json(
      getHttpResponseContent({
        data: await patchPost({ postId, payload: body }),
      })
    );
  } catch (error) {
    res
      .status(400)
      .json(getHttpResponseContent({ success: false, data: error }));
  }
});

// 刪除全部貼文
router.delete('/', async (req, res) => {
  await deletePosts();
  res.json(getHttpResponseContent());
});

// 刪除指定的貼文
router.delete('/:postId', async (req, res) => {
  try {
    const {
      params: { postId },
    } = req;
    await deletePost(postId);
    res.json(getHttpResponseContent());
  } catch (error) {
    res
      .status(400)
      .json(getHttpResponseContent({ success: false, data: error }));
  }
});

module.exports = router;
