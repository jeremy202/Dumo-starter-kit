<template>
  <div class="dashboard-layout">
    <nav class="hidden dashboard-nav lg:block">
      <NuxtLink to="/dashboard/home" class="absolute top-10">
        <img src="/images/dumo-account-logo.svg" alt="">
      </NuxtLink>

      <ul class="">
        <li class="capitalize nav-item" v-for="(link, index) in navItems" :key="index">
          <NuxtLink v-if="!link.logout" :to="link.route" :class="{ 'active': $route.path.endsWith(link.name) }">
            {{ link.name }}
          </NuxtLink>
          <NuxtLink v-if="link.logout" @click="logout">
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <main class="dashboard-content">
      <DashboardAccountHeader @toggleMobileNav="toggleNav" />

      <!-- mobile navigation -->
      <div v-show="mobileNav" class="block mobile-nav-modal md:hidden" @click.self="toggleNav">
        <nav class="dashboard-nav">
          <NuxtLink to="/dashboard/home" class="absolute top-10">
            <img src="/images/dumo-account-logo.svg" alt="">
          </NuxtLink>

          <ul class="">
            <li class="capitalize nav-item" v-for="(link, index) in navItems" :key="index" @click="toggleNav">
              <NuxtLink v-if="!link.logout" :to="link.route" :class="{ 'active': $route.path.endsWith(link.name) }">
                {{ link.name }}
              </NuxtLink>
              <NuxtLink v-if="link.logout" @click="logout">
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>

      <div class="dashboard-wrapper">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const authStore = useAuthStore()
const snackbar = useSnackbar()

const navItems = [
  {
    name: 'profile',
    route: '/dashboard/account/profile'
  },
  {
    name: 'security',
    route: '/dashboard/account/security'

  },
  // {
  //   name: 'team',
  //   route: '/dashboard/account/team'
  // },
  {
    name: 'settings',
    route: '/dashboard/account/settings'
  },
  {
    name: 'log out',
    route: '',
    logout: true
  },
]

const mobileNav = ref(false)

const toggleNav = () => {
  mobileNav.value = !mobileNav.value
}

const logout = () => {
  authStore.logout()
  snackbar.add({ type: 'success', text: "Logout successful" })
}

</script>

<style scoped>
.dashboard-layout {
  min-height: 100vh;
  display: flex;

  @media (max-width:1020px) {
    flex-direction: column
  }
}

.dashboard-nav {
  min-width: 236px;
  height: 100vh;
  background-color: var(--background);
  padding-top: 116px;
  padding-left: 32px;
  position: fixed;

  @media (max-width: 768px) {
    min-width: 70vw;
  }
}

.mobile-nav-modal {
  position: absolute;
  top: 0;
  left: 0;
  transition: ease-in-out 3s;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background: #1E1F2180;
}

.dashboard-content {
  width: 100%;
  padding-left: 32px;
  /* padding-right: 32px; */
  margin-left: 236px;
  margin-bottom: 50px;
  position: relative;

  @media (max-width: 1020px) {
    margin-left: 0;
    padding: 0;
  }
}

.dashboard-wrapper {
  width: 100%;

  @media (max-width: 1020px) {
    padding: 0 14px;
  }
}

.nav-item a {
  margin-bottom: 32px;
  display: inline-block;
  width: 100%;
  border: transparent;
  color: var(--dark);
  font-weight: 500;
  font-size: 20px;
  position: relative;
  transition: all .5s;
}

.nav-item a:hover {
  padding-left: 16px;
}

.active {
  padding-left: 16px;
}

.nav-item a.active {
  color: var(--main-light);
}

.nav-item a.active::before {
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(-50%, -50%);
  content: '';
  height: 60%;
  width: 4px;
  background-color: var(--main-light);
  border-radius: 25px;
}

.nav-item a:not(.active):hover::before {
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(-50%, -50%);
  content: '';
  height: 60%;
  width: 4px;
  background-color: var(--dark-gray-50);
  border-radius: 25px;
}
</style>