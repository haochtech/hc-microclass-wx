var t = getApp(), s = require("../../../wxParse/wxParse.js");

Page({
    data: {
        setting: [],
        lessonid: 0,
        lesson: [],
        sectionid: 0,
        section: [],
        section_list: [],
        section_count: 0,
        lesson_show: 0
    },
    onLoad: function(s) {
        var a = this;
        a.setData({
            lessonid: s.id
        }), t.util.footer(a), setTimeout(function() {
            a.load_setting(), a.load_lesson();
        });
    },
    load_setting: function() {
        var s = this;
        t.util.request({
            url: "entry/wxapp/setting",
            success: function(t) {
                s.setData({
                    setting: t.data.data.setting,
                    lesson_show: t.data.data.setting.lesson_show
                }), wx.setNavigationBarTitle({
                    title: "课程详情"
                });
            }
        });
    },
    load_lesson: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/lesson",
            data: {
                id: a.data.lessonid
            },
            success: function(t) {
                0 != t.data.data.code && wx.showModal({
                    title: "提示信息",
                    content: t.data.data.msg,
                    success: function(t) {
                        t.confirm && wx.navigateTo({
                            url: "../index/index"
                        });
                    }
                }), a.setData({
                    lesson: t.data.data.lesson,
                    section: t.data.data.section,
                    section_list: t.data.data.section_list,
                    section_count: t.data.data.section_count
                }), wx.setNavigationBarTitle({
                    title: t.data.data.lesson.bookname
                }), s.wxParse("descript", "html", t.data.data.lesson.descript, a, 5), s.wxParse("teacherdes", "html", t.data.data.lesson.teacherdes, a, 5);
            }
        });
    },
    cutDirectory: function(t) {
        var s = this, a = t.currentTarget.dataset.key;
        s.setData({
            lesson_show: a
        });
    }
});