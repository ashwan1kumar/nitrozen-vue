import strokeBtn from "./NStrokeBtn";
import flatBtn from "./NFlatBtn";
import clickOutside from "./NClickOutside";

const NitrozenDirectives = {
    install(app) {
      strokeBtn(app);
      flatBtn(app);
      clickOutside(app);
    }
  };
export default NitrozenDirectives;