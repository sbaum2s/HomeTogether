<template>
  <v-sheet class="pa-4">
    <v-card>
      <v-toolbar color="primary" dark>
        <v-toolbar-title>User Profile</v-toolbar-title>
      </v-toolbar>
      <v-tabs vertical>
        <v-tab> <v-icon left>mdi-account</v-icon>Profile </v-tab>
        <v-tab> <v-icon left>mdi-lock</v-icon>Permissions </v-tab>
        <v-tab> <v-icon left>mdi-account-cog</v-icon>Account </v-tab>

        <v-tab-item>
          <v-card flat>
            <v-container id="user-profile" fluid tag="section">
              <v-row justify="center">
                <v-col cols="12" md="7">
                  <v-card flat>
                    <template v-slot:heading>
                      <div class="display-2 font-weight-light">
                        Edit Profile
                      </div>

                      <div class="subtitle-1 font-weight-light">
                        Complete your profile
                      </div>
                    </template>

                    <v-form>
                      <v-container class="py-0">
                        <v-row>
                          <v-col cols="12" md="12">
                            <v-text-field
                              class
                              label="Benutzername"
                              :value="userData.username"
                            />
                          </v-col>

                          <v-col cols="12" md="12">
                            <v-text-field
                              label="Email Adresse"
                              class
                              :value="userData.email"
                            />
                          </v-col>

                          <v-col cols="12" md="6">
                            <v-text-field label="Vorname" class />
                          </v-col>

                          <v-col cols="12" md="6">
                            <v-text-field label="Nachname" class />
                          </v-col>

                          <v-col cols="12">
                            <v-text-field label="Adresse" class />
                          </v-col>

                          <v-col cols="12" md="6">
                            <v-text-field class label="PLZ" type="number" />
                          </v-col>

                          <v-col cols="12" md="6">
                            <v-text-field label="Stadt" class />
                          </v-col>

                          <v-col cols="12" md="12">
                            <v-text-field label="Land" class />
                          </v-col>

                          <v-col cols="12" class="text-right">
                            <v-btn color="success" class="mr-0"
                              >Speichern</v-btn
                            >
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-form>
                  </v-card>
                </v-col>

                <v-col cols="12" md="4" align="center">
                  <v-avatar color="blue" size="150">
                    <img v-if="picture !== null" :src="picture" />
                    <span v-if="picture == null" class="white--text headline"
                      >Profilbild</span
                    >
                  </v-avatar>
                  <v-menu
                    ref="birthdateMenu"
                    v-model="birthdateMenu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="userData.birthdate"
                        label="Geburtsdatum"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      ref="picker"
                      v-model="userData.birthdate"
                      :max="new Date().toISOString().substr(0, 10)"
                      min="1900-01-01"
                      @change="save"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <p>
                Morbi nec metus. Suspendisse faucibus, nunc et pellentesque
                egestas, lacus ante convallis tellus, vitae iaculis lacus elit
                id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum
                aliquam libero, non adipiscing dolor urna a orci. Curabitur
                ligula sapien, tincidunt non, euismod vitae, posuere imperdiet,
                leo. Nunc sed turpis.
              </p>

              <p>
                Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque
                egestas, lacus ante convallis tellus, vitae iaculis lacus elit
                id tortor. Proin viverra, ligula sit amet ultrices semper,
                ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In
                hac habitasse platea dictumst. Fusce ac felis sit amet ligula
                pharetra condimentum.
              </p>

              <p>
                Sed consequat, leo eget bibendum sodales, augue velit cursus
                nunc, quis gravida magna mi a libero. Nam commodo suscipit quam.
                In consectetuer turpis ut velit. Sed cursus turpis vitae tortor.
                Aliquam eu nunc.
              </p>

              <p>
                Etiam ut purus mattis mauris sodales aliquam. Ut varius
                tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce
                fermentum odio nec arcu.
              </p>

              <p class="mb-0">
                Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In
                dui magna, posuere eget, vestibulum et, tempor auctor, justo.
                Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed,
                iaculis a, condimentum nec, nisi.
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <p>
                Fusce a quam. Phasellus nec sem in justo pellentesque facilisis.
                Nam eget dui. Proin viverra, ligula sit amet ultrices semper,
                ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In
                dui magna, posuere eget, vestibulum et, tempor auctor, justo.
              </p>

              <p class="mb-0">
                Cras sagittis. Phasellus nec sem in justo pellentesque
                facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut,
                mi. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nam at tortor in tellus interdum sagittis.
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-sheet>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "UserProfile",
  props: ["src"],
  data: () => ({
    userData: [],
    menu: false,
    birthdateMenu: false,
    imageData: null,
    picture: null,
    uploadValue: 0,
  }),
  methods: {
    ...mapState("auth", ["activeUser"]),
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },
    deleteImage() {
      this.picture = null;
    },
    save(date) {
      // this.$refs.birthdateMenu.save(date);
    },
  },
  watch: {
    birthdateMenu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    },
  },
  mounted() {
    this.userData = this.$store.state.auth.activeUser;
  },
};
</script>
<style scoped>
.v-tab {
  justify-content: left !important;
}
</style>