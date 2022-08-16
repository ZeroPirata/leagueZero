<template>
  <div class="elo-lis">
    <figure class="image">
      <img
        class="img-summoner"
        :src="summoner?.profileIconId"
        :alt="summoner?.summonerName + 'Icon'"
      />
    </figure>
    <div class="card-summoner">
      <h1>Summoner Nick</h1>
      <p>{{ summoner?.summonerName }}</p>
      <p>Level {{ summoner?.summonerLevel }}</p>
    </div>
  </div>
  <div class="card-ranked">
    <div
      v-for="(ranked, i) in summoner?.responseRanked"
      :key="i"
      class="image-ranked"
    >
      <h2 v-if="ranked.queueType === 'RANKED_SOLO_5x5'">Solo/Duo</h2>
      <h2 v-if="ranked.queueType === 'RANKED_FLEX_SR'">Flex</h2>
      <h2 v-if="ranked.queueType === 'RANKED_TFT_DOUBLE_UP'">TFT Oficina</h2>

      <figure v-if="ranked.tier == 'IRON'">
        <img
          class="img-elo"
          src="@/assets/ranked-emblems/Emblem_Iron.png"
          alt=""
        />
        <p>
          {{ ranked.tier }} {{ ranked.rank }} - {{ ranked.leaguePoints }} pdl
        </p>
      </figure>
      <figure v-if="ranked.tier == 'BRONZE'">
        <img
          class="img-elo"
          src="@/assets/ranked-emblems/Emblem_Bronze.png"
          alt=""
        />
        <p>
          {{ ranked.tier }} {{ ranked.rank }} - {{ ranked.leaguePoints }} pdl
        </p>
      </figure>
      <figure v-if="ranked.tier == 'SILVER'">
        <img
          class="img-elo"
          src="@/assets/ranked-emblems/Emblem_Silver.png"
          alt=""
        />
        <p>
          {{ ranked.tier }} {{ ranked.rank }} - {{ ranked.leaguePoints }} pdl
        </p>
      </figure>
      <figure v-if="ranked.tier == 'GOLD'">
        <img
          class="img-elo"
          src="@/assets/ranked-emblems/Emblem_Gold.png"
          alt=""
        />
        <p>
          {{ ranked.tier }} {{ ranked.rank }} - {{ ranked.leaguePoints }} pdl
        </p>
      </figure>
      <figure v-if="ranked.tier == 'PLATINUM'">
        <img
          class="img-elo"
          src="@/assets/ranked-emblems/Emblem_Platinum.png"
          alt=""
        />
        <p>
          {{ ranked.tier }} {{ ranked.rank }} - {{ ranked.leaguePoints }} pdl
        </p>
      </figure>
      <figure v-if="ranked.tier == 'DIAMOND'">
        <img
          class="img-elo"
          src="@/assets/ranked-emblems/Emblem_Diamond.png"
          alt=""
        />
        <p>
          {{ ranked.tier }} {{ ranked.rank }} - {{ ranked.leaguePoints }} pdl
        </p>
      </figure>
      <figure v-if="ranked.tier === 'MASTER'">
        <img
          class="img-elo"
          src="@/assets/ranked-emblems/Emblem_Master.png"
          alt=""
        />
        <p>
          {{ ranked.tier }} {{ ranked.rank }} - {{ ranked.leaguePoints }} pdl
        </p>
      </figure>
      <figure v-if="ranked.tier == 'GRANDMASTER'">
        <img
          class="img-elo"
          src="@/assets/ranked-emblems/Emblem_Grandmaster.png"
          alt=""
        />
        <p>
          {{ ranked.tier }} {{ ranked.rank }} - {{ ranked.leaguePoints }} pdl
        </p>
      </figure>
      <figure v-if="ranked.tier == 'CHALLENGER'">
        <img
          class="img-elo"
          src="@/assets/ranked-emblems/Emblem_Challenger.png"
          alt=""
        />
        <p>
          {{ ranked.tier }} {{ ranked.rank }} - {{ ranked.leaguePoints }} pdl
        </p>
      </figure>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import ISummoner from "@/types/Elo";
import api from "@/service/api";
export default defineComponent({
  setup() {
    const summoner = ref<ISummoner>();
    const fetchSummoner = () =>
      api
        .get(`/summon/Downer%20Witch`)
        .then((response) => (summoner.value = response.data));

    onMounted(fetchSummoner);
    return { summoner };
  },
});
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.elo-lis {
  display: flex;
  width: 25vw;
  margin: 1em auto;
  border: 5px solid rgb(32, 30, 30);
  background-color: rgba(172, 172, 172, 0.5);
}
.card-summoner {
  text-align: center;
  margin: auto 0;
  height: 50%;
  width: 100%;
}
.elo-lis p {
  font-size: 1.25em;
  text-align: center;
}
.image {
  width: 255px;
  height: 250px;
}
.img-summoner {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 2px solid black;
  margin-left: 1em;
}
.card-ranked {
  border: 5px solid rgb(32, 30, 30);
  background-color: rgba(172, 172, 172, 0.5);
  margin: 1em auto 2em auto;
  display: flex;
  width: 25vw;
}
.image-ranked {
  width: 150px;
}
.img-elo {
  width: 150px;
  display: flex;
}
.image-ranked h2,
.image-ranked p {
  text-align: center;
}
</style>
