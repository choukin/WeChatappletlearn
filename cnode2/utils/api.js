'use strict'
var HOST_URI = "https://cnodejs.org/api/v1";

var GET_TOPICS = "/topics";

var GET_TOPIC_BY_ID = '/topic';

/**
 * 把obj对象变成kk=value&的字符串
 */
function obj2uri (obj) {
    return Object.keys(obj).map(function(k){
        return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]);
    }).join("&");
}

/**
 * 获取数据列表链接
 */
function getTopics (obj) {
    return HOST_URI + GET_TOPICS + '?' + obj2uri(obj);
}

//获取文章页面接口
function getTopicByID (id,obj) {
    return HOST_URI + GET_TOPIC_BY_ID +"/" + id +"?" + obj2uri(obj);
}

module.exports = {
    
    getTopics:getTopics,
    getTopicByID:getTopicByID
}