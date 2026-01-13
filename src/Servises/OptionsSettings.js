class OptionsSettings {
    constructor(base_options_names) {
        this.base_options_names = base_options_names;
    }

    changingNames(setOptionsNamesFalse, check_mark, index) {
        return setOptionsNamesFalse((prev) => {
            const updated = [...prev];
            const current = prev[index];
            if (index === 0) {
              return prev;
            }
            if (current.includes(check_mark)) {
              updated[index] =this.base_options_names[index];
            } else {
              updated[index] = `${this.base_options_names[index]} ${check_mark}`;
            }
            return updated;
          });

    }
}

export default OptionsSettings;