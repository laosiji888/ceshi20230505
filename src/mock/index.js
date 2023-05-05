import Mock from 'mockjs'
const data = {
    "id": "@guid",
    "email": "@email",
};
Mock.mock('/api/test', 'post', data)
export default Mock;