<template>
  <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
    <div class="w-100">
      <h2 class="mb-5">Experience</h2>

      <div
        v-for="edge in $static.experience.edges"
        class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
        :key="edge.node.id"
      >
        <div class="resume-content">
          <h3 class="mb-0">{{ edge.node.title }}</h3>
          <div class="subheading mb-3">{{ edge.node.subTitle }}</div>
          <p>{{ edge.node.body }}</p>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">{{ edge.node.period }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<static-query>
query {
  experience: allExperienceData {
    edges {
      node {
        id
        title
        subTitle
        body
        period
      }
    }
  }
}
</static-query>
