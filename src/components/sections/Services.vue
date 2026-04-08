<template>
  <section id="services" class="padding-x mb-20">
    <div class="flex w-full flex-col">
      <h3
        id="what-i-do"
        v-html="whatIDo"
        class="heading-1 font-extrabold uppercase"
      ></h3>

      <div
        id="services-text"
        class="grid-gap text-flax-smoke-300 mt-[5%] grid grid-cols-12 justify-end opacity-0 lg:grid"
      >
        <p
          class="heading-6 text-flax-smoke-300/85 col-span-4 col-start-0 text-center text-nowrap md:col-start-4"
        >
          ( SERVICES )
        </p>
        <p
          class="heading-4 font-fancy col-span-8 w-full text-balance sm:font-semibold md:col-span-5"
        >
          I create cinematic visuals that combine storytelling with strong visual
          direction. From shooting to post-production, every frame is crafted
          with intention to deliver work that feels real, immersive, and
          visually distinct.
        </p>
      </div>
    </div>

    <div class="relative mt-12 w-full lg:mt-[10%]">
      <div class="mt-12 flex flex-col justify-start pb-[10vh] md:pb-[40vh]">
        <ServicesCard
          v-for="(card, index) in servicesCardProps"
          :key="index"
          :number="index + 1"
          :title="card.title"
          :body="card.body"
          :headings="card.headings"
          :shape="card.shape"
          class="border-flax-smoke-500/50 sticky border-t bg-[#0B0B0A]"
          :style="getStyle(index)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { animateSplitText } from '@/animations';
  import { textSplitterIntoChar } from '@/functions';
  import { onBeforeMount, onMounted, ref } from 'vue';
  import { ServicesCard } from '..';

  const whatIDo = ref('My services /');

  const servicesCardProps = [
    {
      title: 'Cinematography',
      body: 'Crafting visuals through intentional lighting, composition, and movement to serve the story.',
      headings: ['Shot Composition', 'Lighting Design', 'Camera Movement'],
      shape: `<svg viewBox="0 0 200 200"  xmlns="http://www.w3.org/2000/svg">
  <path d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z"/>
  </svg>
  `,
    },
    {
      title: 'Brand Films',
      body: 'Creating visually driven films that communicate a brand’s message with clarity and impact.',
      headings: [
        'Product Films',
        'Campaign Shoots',
        'Social Content',
      ],
      shape: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M127.14 200C99.9942 200 99.9943 167.423 72.8487 167.423C41.6048 167.423 0 158.386 0 127.133C0 99.9885 32.5678 99.9885 32.5678 72.8445C32.5678 41.6139 41.6048 0 72.8602 0C100.006 0 100.006 32.5774 127.151 32.5774C158.384 32.5774 200 41.6139 200 72.8675C200 100.012 167.421 100.012 167.421 127.156C167.409 158.444 158.384 200 127.14 200Z" />
  </svg>
  `,
    },
    {
      title: 'Video Editing',
      body: 'Shaping raw footage into a cohesive narrative with precise pacing and rhythm.',
      headings: [
        'Narrative Editing',
        'Color Grading',
        'Sound Design',
      ],
      shape: `<svg  viewBox="0 0 200 200"  xmlns="http://www.w3.org/2000/svg">
  <path d="M100 0L170.711 29.2893L200 100L170.711 170.711L100 200L29.2893 170.711L0 100L29.2893 29.2893L100 0Z" />
  </svg>
  `,
    },
    {
      title: 'Photography',
      body: 'Capturing still visuals with a strong sense of light, detail, and composition.',
      headings: [
        'Lifestyle',
        'Product',
        'Portraits',
      ],
      shape: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M100 0L130 70L200 100L130 130L100 200L70 130L0 100L70 70L100 0Z" />
  </svg>
  `,
    },
  ];

  onBeforeMount(() => {
    whatIDo.value = textSplitterIntoChar('What I do /', true);
  });

  const topOffset = ref(20);
  const stackHeight = ref(5.75);

  const updateOffsets = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) {
        topOffset.value = 8;
        stackHeight.value = 4.5; // Matches max-sm:min-h-[4.5rem]
      } else {
        topOffset.value = 10;
        stackHeight.value = 6.5; // Matches sm:min-h-[6.5rem]
      }
    }
  };

  onMounted(() => {
    animateSplitText('#what-i-do .letters', '#services-text', 0.7, 0.01, 0);
    updateOffsets();
    window.addEventListener('resize', updateOffsets);
  });

  const getStyle = (index: number) => {
    return {
      top: `calc(${topOffset.value}vh + ${index * stackHeight.value}rem)`,
      zIndex: index + 1,
    };
  };
</script>
