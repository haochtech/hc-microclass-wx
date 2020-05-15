var t = getApp(), a = require("../../../wxParse/wxParse.js");

Page({
    data: {
        setting: [],
        lessonid: 0,
        sectionid: 0,
        lesson: "",
        section: ""
    },
    onLoad: function(a) {
        var e = this;
        t.util.footer(e), setTimeout(function() {
            e.load_setting(), e.load_article();
        }), e.setData({
            lessonid: a.id,
            sectionid: a.sectionid
        });
    },
    load_setting: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/setting",
            success: function(t) {
                a.setData({
                    setting: t.data.data.setting
                }), wx.setNavigationBarTitle({
                    title: "课程章节详情"
                });
            }
        });
    },
    load_article: function() {
        var e = this;
        t.util.request({
            url: "entry/wxapp/lessonsarticle",
            data: {
                lessonid: e.data.lessonid,
                sectionid: e.data.sectionid
            },
            success: function(t) {
                0 == t.data.data.code ? (e.setData({
                    lesson: t.data.data.lesson,
                    section: t.data.data.section
                }), wx.setNavigationBarTitle({
                    title: t.data.data.section.title
                }), a.wxParse("content", "html", t.data.data.section.content, e, 5)) : wx.showModal({
                    title: "提示信息",
                    content: t.data.data.msg,
                    success: function(t) {
                        t.confirm && wx.navigateTo({
                            url: "../newlesson/index"
                        });
                    }
                });
            }
        });
    }
});