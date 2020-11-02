import "remixicon/fonts/remixicon.css";
import "./index.less";
import { defineComponent, PropType } from "vue";
export default defineComponent({
  name: "Icon",
  props: {
    icon: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    return () => {
      return <i class={"ri-" + props.icon} aria-hidden="true"></i>;
    };
  },
});
