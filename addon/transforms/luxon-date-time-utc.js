import Transform from "ember-data/transform";
import { DateTime } from "ember-luxon";

export default Transform.extend({
  deserialize(serialized) {
    if (serialized === null) {
      return serialized;
    }

    return DateTime.fromISO(serialized).toUTC();
  },

  serialize(deserialized) {
    if (!deserialized) {
      return deserialized;
    }

    return deserialized.toUTC().toISO();
  },
});
