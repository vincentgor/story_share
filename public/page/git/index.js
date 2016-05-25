/**
 * Created by vinxent on 2016/5/25.
 */

var apiURL = 'https://api.github.com/repos/vincentgor/story_share/commits?per_page=3&sha=';

var git = new Vue({
    el: '#git',
    data: {
        branches: ['master', 'dev'],
        currentBranch: 'master',
        commits: null
    },
    created: function () {
        this.fetchData();
    },
    watch: {
        currentBranch: 'fetchData'
    },
    filters: {
        truncate: function (v) {
            var newline = v.indexOf('\n')
            return newline > 0 ? v.slice(0, newline) : v
        },
        formatDate: function (v) {
            return v.replace(/T|Z/g, ' ')
        }
    },
    methods: {
        fetchData: function () {
            $.get(apiURL + this.currentBranch, function(err, state, data) {
                this.commits = data.responseJSON;
            }.bind(this))
        }
    }
});