Vue.component('entry-component', {
  props: ['entry', 'entries'],
  template: `   <div  class="media mt-5">
    <img v-bind:src="entry.image" alt="" class="mr-3" />
    <div>
      <h5>
        {{entry.title}}
        <span class="float-right text-primary ml-3"
          ><i
            class="fas fa-thumbs-down clickme"
            v-on:click="downVote(entry.id)"
          ></i
          ><strong class="ml-2">{{entry.downVotes}}</strong></span
        >
        <span class="float-right text-primary m"
          ><i
            class="fas fa-thumbs-up clickme"
            v-on:click="upvote(entry.id)"
          ></i
          ><strong class="ml-2">{{entry.votes}}</strong></span
        >
      </h5>
      <div>
        <p>{{entry.desc}}</p>
        <small class="text-muted"
          >Ein gericht aus: {{entry.author}}</small
        >
      </div>
    </div>
  </div>`,
  methods: {
    upvote(entryId) {
      const entry = this.entries.find((entry) => entry.id === entryId);
      entry.votes++;
    },
    downVote(entryId) {
      const entry = this.entries.find((entry) => entry.id === entryId);
      entry.downVotes++;
    },
  },
});

new Vue({
  el: '#app',
  data: {
    entries: entries,
  },
  computed: {
    sortedEntries() {
      return this.entries.sort((a, b) => {
        return b.votes - a.votes;
      });
    },
    sumTotalVotes() {
      var i = 0;
      var totalSum = 0;
      for (i; i < this.entries.length; i++) {
        totalSum += entries[i].votes;
        totalSum += entries[i].downVotes;
      }
      return totalSum;
    },
  },
});
