<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
    <div class="w-100">
      <h1 class="mb-0">
        Navin
        <span class="text-primary">Karkera</span>
      </h1>
      <div class="subheading mb-5">
        Thane 401105, Maharashtra, India
        <a
          href="mailto:navinkarkera@disroot.org"
        >navinkarkera@disroot.org</a>
      </div>
      <p class="lead mb-5">
        I am a Python developer with 5+ years of experience in automating processes and web technologies.
        Interested in writing core logic, web designing and learning new technologies.
        GNU/Linux and Free software supporter.
      </p>
      <div class="social-icons">
        <a
          href="https://www.linkedin.com/in/navin-karkera-407957a0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome :icon="['fab', 'linkedin']" />
        </a>
        <a href="https://github.com/navinkarkera/" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'github']" />
        </a>
        <a href="https://twitter.com/navinrkarkera" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'twitter']" />
        </a>
        <a href="https://gitlab.com/navinkarkera" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'gitlab']" />
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.social-icons a {
  cursor: pointer;
  display: inline-block;
  height: 3.5rem;
  width: 3.5rem;
  background-color: var(--secondary);
  color: #fff !important;
  border-radius: 100%;
  text-align: center;
  font-size: 1.5rem;
  line-height: 3.5rem;
  margin-right: 1rem;

  @media (max-width: 380px) {
    margin-right: 0.5rem;
  }

  @media (max-width: 350px) {
    margin-right: 0.2rem;
  }
}

.social-icons a:last-child {
  margin-right: 0;
}

.social-icons a:hover {
  background-color: var(--primary);
}
</style>
