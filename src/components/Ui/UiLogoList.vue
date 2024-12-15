<script setup>
import facebookIcon from '@/assets/facebook.png'
import telegramIcon from '@/assets/telegram 1.png'
import youtubeIcon from '@/assets/youtube-youtube 1.png'
import livejournalIcon from '@/assets/livejournal-svgrepo-com 1.png'
</script>

<template>
  <ul class="social-icons">
    <li class="icon-item">
      <img :src="facebookIcon" alt="Facebook" />
    </li>
    <li class="icon-item">
      <img :src="youtubeIcon" alt="YouTube" />
    </li>
    <li class="icon-item">
      <img :src="telegramIcon" alt="Telegram" />
    </li>
    <li class="icon-item">
      <img :src="livejournalIcon" alt="LiveJournal" />
    </li>
  </ul>
</template>

<style scoped>
.social-icons {
  color: white;
  display: flex;
  gap: 20px;
  padding: 10px 0;
  justify-content: center;
}

.icon-item img {
  width: 40px;
  height: 40px;
}
</style>
