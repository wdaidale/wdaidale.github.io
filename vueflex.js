const vm = new Vue({
    el: '.box',
    data: {
        cour: "H5移动端开发",
        cscope: ["主修", "必修"],
        clazz: ["软件01班", "软件02班", "移动01班"],
        course: ["H5移动端开发", "Java开发", "软件测试"],
        teacher: ["张老师", "刘老师", "李老师"]
    },
    methods: {
        sel() {
            alert("课程（" + this.cour + "）选择成功")
        }
    }
})
