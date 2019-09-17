export default {
  actions: {
    setCurrentCheckpoint({ commit, rootGetters }, id) {
      let checkpoint = rootGetters.getCheckpoint(id);
      commit("setCurrentCheckpoint", checkpoint);
    },
    setPlanModalCheckpointId({ commit }, id) {
      commit("setPlanModalCheckpointId", id);
    },
    toggleCheckpointModal({ commit }) {
      commit("toggleCheckpointModal");
    },
    toggleCheckpointNewModal({ commit }) {
      commit("toggleCheckpointNewModal");
    },
  },
  mutations: {
    setPlanMainCheckpointId(state, id) {
      state.plan_main_checkpoint_id = id;
    },
    setPlanModalCheckpointId(state, id) {
      state.plan_modal_checkpoint_id = id;
    },
    setCurrentCheckpoint(state, checkpoint) {
      state.current_checkpoint = checkpoint;
    },
    toggleCheckpointModal(state) {
      state.checkpoint_modal_display = !state.checkpoint_modal_display;
    },
    toggleCheckpointNewModal(state) {
      state.checkpoint_new_modal_display = !state.checkpoint_new_modal_display;
    }
  },
  state: {
    checkpoints: [
      {
        id: 1,
        place_id: 1,
        title: "City1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et placerat elit. Proin quis ultricies mauris, vitae ornare mauris. Mauris sapien ante, ullamcorper sit amet magna ut, dignissim dignissim leo. Nam interdum tincidunt mi quis faucibus. Praesent bibendum lacus in eros mollis, ac eleifend augue ultricies. Aliquam ullamcorper gravida metus vitae fringilla. Aliquam ac vehicula lectus. Maecenas leo sapien, accumsan in mi vel, mollis eleifend sapien. Nunc sed est vitae eros cursus rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce eu dictum nisl, sed pellentesque ante. Etiam sed ornare nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et placerat elit. Proin quis ultricies mauris, vitae ornare mauris. Mauris sapien ante, ullamcorper sit amet magna ut, dignissim dignissim leo. Nam interdum tincidunt mi quis faucibus. Praesent bibendum lacus in eros mollis, ac eleifend augue ultricies. Aliquam ullamcorper gravida metus vitae fringilla. Aliquam ac vehicula lectus. Maecenas leo sapien, accumsan in mi vel, mollis eleifend sapien. Nunc sed est vitae eros cursus rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce eu dictum nisl, sed pellentesque ante. Etiam sed ornare nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et placerat elit. Proin quis ultricies mauris, vitae ornare mauris. Mauris sapien ante, ullamcorper sit amet magna ut, dignissim dignissim leo. Nam interdum tincidunt mi quis faucibus. Praesent bibendum lacus in eros mollis, ac eleifend augue ultricies. Aliquam ullamcorper gravida metus vitae fringilla. Aliquam ac vehicula lectus. Maecenas leo sapien, accumsan in mi vel, mollis eleifend sapien. Nunc sed est vitae eros cursus rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce eu dictum nisl, sed pellentesque ante. Etiam sed ornare nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et placerat elit. Proin quis ultricies mauris, vitae ornare mauris. Mauris sapien ante, ullamcorper sit amet magna ut, dignissim dignissim leo. Nam interdum tincidunt mi quis faucibus. Praesent bibendum lacus in eros mollis, ac eleifend augue ultricies. Aliquam ullamcorper gravida metus vitae fringilla. Aliquam ac vehicula lectus. Maecenas leo sapien, accumsan in mi vel, mollis eleifend sapien. Nunc sed est vitae eros cursus rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce eu dictum nisl, sed pellentesque ante. Etiam sed ornare nisi.",
        checkable_type: "Plan",
        checkable_id: 1,
      },
      {
        id: 2,
        place_id: 2,
        title: "City2",
        description: "Description2",
        checkable_type: "Plan",
        checkable_id: 1,
      },
      {
        id: 3,
        place_id: 3,
        title: "City1 - place",
        description: "Description city1 - place",
        checkable_type: "Checkpoint",
        checkable_id: 1,
      },
      {
        id: 4,
        place_id: 4,
        title: "City1 - place2",
        description: "Description city1 - place2",
        checkable_type: "Checkpoint",
        checkable_id: 1,
      },
      {
        id: 5,
        place_id: 5,
        title: "City1 - place3",
        description: "Description city1 -place3",
        checkable_type: "Checkpoint",
        checkable_id: 1,
      },
      {
        id: 6,
        place_id: 6,
        title: "USA City1",
        description: "Description city1",
        checkable_type: "Plan",
        checkable_id: 2,
      },
      {
        id: 7,
        place_id: 7,
        title: "USA City2",
        description: "Description city2",
        checkable_type: "Plan",
        checkable_id: 2,
      },
      {
        id: 8,
        place_id: 8,
        title: "City 1 Place 3 subPlace 1",
        description: "City 1 Place 3 subPlace 1",
        checkable_type: "Checkpoint",
        checkable_id: 5,
      },
      {
        id: 9,
        place_id: 9,
        title: "City 1 Place 3 subPlace 2",
        description: "City 1 Place 3 subPlace 2",
        checkable_type: "Checkpoint",
        checkable_id: 5,
      }
    ],
    current_checkpoint: null,
    plan_modal_checkpoint_id: null,
    checkpoint_modal_display: false,
    checkpoint_new_modal_display: false,
  },
  getters: {
    allCheckpoints(state) {
      return state.checkpoints;
    },
    getCheckpoint(state) {
      return id => {
        return state.checkpoints.find(checkpoint => {
          return checkpoint.id == id;
        });
      };
    },
    getSubCheckpoints(state, getters) {
      return (id, type) => {
        let sub = state.checkpoints.filter(checkpoint => {
          return (
            checkpoint.checkable_id == id && checkpoint.checkable_type == type
          );
        });
        if (sub.length) return sub;
        if (type == "Checkpoint") return [getters.getCheckpoint(id)];
      };
    },
    getPlanMainCheckpointId(state) {
      return state.plan_main_checkpoint_id;
    },
    getPlanModalCheckpointId(state) {
      return state.plan_modal_checkpoint_id;
    },
    currentCheckpoint(state) {
      return state.current_checkpoint;
    },
    planCheckpointModalDisplay(state) {
      return state.checkpoint_modal_display;
    },
    checkpointNewModalDisplay(state) {
      return state.checkpoint_new_modal_display;
    },
  }
};
