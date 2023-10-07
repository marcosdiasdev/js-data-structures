import LinkedList from "./linkedlist";

describe("LinkedList", () => {
  describe("get", () => {
    it("should return the element at the passed position", () => {
      const list = new LinkedList();
      list.append(10);
      list.append(20);
      list.append(30);
      expect(list.get(0)).toBe(10);
      expect(list.get(1)).toBe(20);
      expect(list.get(2)).toBe(30);
    });

    it("should return null if position is non-existent", () => {
      const list = new LinkedList();
      list.append(10);
      list.append(20);

      expect(list.get(2)).toBe(null);
      expect(list.get(-2)).toBe(null);
    });
  });

  describe("getFirst", () => {
    it("should return the element in the first position", () => {
      const list = new LinkedList();
      list.append(10);
      list.append(20);
      list.append(30);

      expect(list.getFirst()).toBe(10);
    });

    it("should return null if list is empty", () => {
      const list = new LinkedList();

      expect(list.getFirst()).toBe(null);
    });
  });

  describe("getLast", () => {
    it("should return the element in the first position", () => {
      const list = new LinkedList();
      list.append(10);
      list.append(20);
      list.append(30);

      expect(list.getLast()).toBe(30);
    });

    it("should return null if list is empty", () => {
      const list = new LinkedList();

      expect(list.getLast()).toBe(null);
    });
  });

  describe("append", () => {
    it("should increment length on append", () => {
      const list = new LinkedList();
      expect(list.size()).toBe(0);
      list.append(1);
      list.append(2);
      expect(list.size()).toBe(2);
    });
  });

  describe("removeAt", () => {
    it("should return the element at the removed position", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.removeAt(2)).toBe(3);
    });

    it("should return null when removing a non-existent position", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.removeAt(3)).toBe(null);
    });
  });
});
