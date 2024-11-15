<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div class="container">
        <div class="nav-content">
          <span
            class="text-xl font-bold cursor-pointer"
            @click="navigateTo('/')"
            >Dumo UI Kit</span
          >
        </div>
      </div>
    </nav>

    <div class="container">
      <header class="header">
        <h1>Dumo Components</h1>
        <p>A comprehensive collection of Vue 3 components</p>
      </header>

      <!-- Buttons Section -->
      <section class="component-section">
        <h2 class="section-title">Buttons & Links</h2>

        <!-- DumoButton -->
        <div class="demo-item">
          <h3 class="component-name">DumoButton</h3>
          <p class="component-description">
            Versatile button component with multiple variants
          </p>

          <div class="props-table">
            <table>
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>secondary</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Secondary style</td>
                </tr>
                <tr>
                  <td>cta</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Call-to-action style</td>
                </tr>
                <tr>
                  <td>ctaPrimary</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Primary CTA style</td>
                </tr>
                <tr>
                  <td>sm</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Small size</td>
                </tr>
                <tr>
                  <td>lg</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Large size</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="preview-section">
            <div>
              <DumoButton>Default</DumoButton>
            </div>
            <div>
              <DumoButton cta>CTA</DumoButton>
            </div>
            <div>
              <DumoButton secondary>Secondary</DumoButton>
            </div>
            <div>
              <DumoButton sm>Small</DumoButton>
            </div>
            <div>
              <DumoButton lg>Large</DumoButton>
            </div>
          </div>
        </div>

        <!-- DumoButtonLink -->
        <div class="demo-item">
          <h3 class="component-name">DumoButtonLink</h3>
          <p class="component-description">
            Link styled as a button with optional image
          </p>

          <div class="props-table">
            <table>
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>color</td>
                  <td>string</td>
                  <td>-</td>
                  <td>Text color</td>
                </tr>
                <tr>
                  <td>image</td>
                  <td>string</td>
                  <td>-</td>
                  <td>Image URL</td>
                </tr>
                <tr>
                  <td>route</td>
                  <td>string</td>
                  <td>-</td>
                  <td>Navigation route</td>
                </tr>
                <tr>
                  <td>uppercase</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Transform text to uppercase</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="preview-section">
            <DumoButtonLink route="/" color="#1E1F21"
              >Default Link</DumoButtonLink
            >
            <DumoButtonLink route="/" uppercase>Uppercase</DumoButtonLink>
            <DumoButtonLink route="/" image="/images/ic-right-arrow-orange.svg"
              >Link with image</DumoButtonLink
            >
          </div>
        </div>
      </section>

      <!-- Form Controls Section -->
      <section class="component-section">
        <h2 class="section-title">Form Controls</h2>

        <!-- DumoInput -->
        <div class="demo-item">
          <h3 class="component-name">DumoInput</h3>
          <p class="component-description">
            Input component with various styles and states
          </p>

          <div class="props-table">
            <table>
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>modelValue</td>
                  <td>any</td>
                  <td>-</td>
                  <td>v-model binding value</td>
                </tr>
                <tr>
                  <td>label</td>
                  <td>string</td>
                  <td>-</td>
                  <td>Input label</td>
                </tr>
                <tr>
                  <td>type</td>
                  <td>string</td>
                  <td>text</td>
                  <td>Input type</td>
                </tr>
                <tr>
                  <td>error</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Error state</td>
                </tr>
                <tr>
                  <td>success</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Success state</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="preview-section">
            <DumoInput label="Default Input" placeholder="" />
            <DumoInput label="With Error" error placeholder="" />
            <DumoInput label="With Success" success placeholder="" />
          </div>
        </div>

        <!-- DumoPrefixInput -->
        <div class="demo-item">
          <h3 class="component-name">DumoPrefixInput</h3>
          <p class="component-description">
            Input with customizable prefix position
          </p>

          <div class="preview-section">
            <DumoPrefixInput
              prefix="dumo.io/"
              position="left"
              placeholder="your-subdomain" />
            <DumoPrefixInput
              prefix=".dumo.io"
              position="right"
              placeholder="your-domain"
              borderColor="#f07d22" />
          </div>
        </div>

        <!-- DumoTextArea -->
        <div class="demo-item">
          <h3 class="component-name">DumoTextArea</h3>
          <p class="component-description">
            Textarea component with label support
          </p>

          <div class="preview-section">
            <DumoTextArea
              label="Description"
              placeholder="Enter your description" />
            <DumoTextArea
              label="With Error"
              error
              errorMessage="This field is required" />
          </div>
        </div>

        <!-- DumoToggle -->
        <div class="demo-item">
          <h3 class="component-name">DumoToggle</h3>
          <p class="component-description">Toggle switch with size variants</p>

          <div class="preview-section">
            <DumoToggle v-model="toggleState" />
            <DumoToggle v-model="toggleState" sm />
            <DumoToggle v-model="toggleState" blue />
          </div>
        </div>

        <!-- DumoCheckbox -->
        <div class="demo-item">
          <h3 class="component-name">DumoCheckbox</h3>
          <p class="component-description">checkbox with custom styling</p>

          <div class="preview-section">
            <div class="-mt-3">
              <DumoCheckbox v-model="checkboxState" />
            </div>
          </div>
        </div>
      </section>

      <!-- Dropdowns Section -->
      <section class="component-section">
        <h2 class="section-title">Dropdowns</h2>

        <!-- DumoCurrencyDropdown -->
        <div class="demo-item">
          <h3 class="component-name">DumoCurrencyDropdown</h3>
          <p class="component-description">
            Currency selector with amount input (multiple & single option)
          </p>

          <div class="preview-section">
            <DumoCurrencyDropdown
              :items="currencies"
              v-model="selectedCurrency" />
            <DumoCurrencyDropdown
              :items="[currencies[0]]"
              v-model="selectedCurrency" />
          </div>
        </div>

        <!-- DumoImageDropdown -->
        <div class="demo-item">
          <h3 class="component-name">DumoImageDropdown</h3>
          <p class="component-description">Dropdown with image support</p>

          <div class="preview-section">
            <DumoImageDropdown
              :items="languages"
              v-model="selectedLanguage"
              placeholder="Select Language" />
          </div>
        </div>
      </section>

      <!-- Cards Section -->
      <section class="component-section">
        <h2 class="section-title">Cards</h2>

        <!-- DumoCard -->
        <div class="demo-item">
          <h3 class="component-name">DumoCard</h3>
          <p class="component-description">
            Versatile card component with multiple variants
          </p>

          <div class="preview-section">
            <DumoCard default>
              <p>Default Card Content</p>
            </DumoCard>
          </div>
        </div>

        <!-- Card titles -->
        <div class="demo-item">
          <h3 class="component-name">Card title</h3>
          <p class="component-description">
            Versatile card title component with/without icon
          </p>

          <div class="preview-section">
            <DumoCardTitle text="Basic Card Title" />
            <DumoCardTitle
              text="With Personal Icon"
              image="/images/ic-personal.svg" />
            <DumoCardTitle
              text="With School Icon"
              image="/images/ic-school.svg" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const toggleState = ref(false)
const checkboxState = ref(false)

const currencies = [
  { currency: 'USD', amount: '' },
  { currency: 'EUR', amount: '' },
  { currency: 'GBP', amount: '' },
]
const selectedCurrency = ref(currencies[0])

const languages = [
  { text: 'English', value: 'en', image: '/images/english-flag.png' },
  { text: 'French', value: 'fr', image: '/images/french-flag.png' },
]
const selectedLanguage = ref(languages[0])
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.header {
  padding: 4rem 0;
  text-align: center;
}

.header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.header p {
  font-size: 1.25rem;
  color: #4b5563;
}

.component-section {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.demo-item {
  margin-bottom: 3rem;
}

.component-name {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.component-description {
  color: #4b5563;
  margin-bottom: 1.5rem;
}

.props-table {
  margin: 1.5rem 0;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  overflow: hidden;
}

.props-table table {
  width: 100%;
  border-collapse: collapse;
}

.props-table th,
.props-table td {
  padding: 0.75rem 1rem;
  text-align: left;
  border-bottom: 1px solid #e5e7eb;
}

.props-table th {
  background: #f9fafb;
  font-weight: 600;
}

.preview-section {
  background: #f9fafb;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.nav-content {
  height: 4rem;
  display: flex;
  align-items: center;
}
</style>
