import { Button, Center, Heading, Input, Text, View } from "native-base";
import { useState } from "react";
import uuid from "react-native-uuid";
import { Tareas } from "./Tareas";

export const Lista = () => {
  const [title, setTitle] = useState("");
  const [tarea, setTarea] = useState([]);

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   setTitle(value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTarea = {
      id: uuid.v1(),
      title: title,
      completed: false,
    };

    const temp = [...tarea];
    temp.unshift(newTarea);

    setTarea(temp);
    setTitle("");
  };

  const handleUpdate = (id, value) => {
    const temp = [...tarea];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTarea(temp);
  };

  const handleDelete = (id) => {
    const temp = tarea.filter((item) => item.id !== id);
    setTarea(temp);
  };

  return (
    <Center>
      <Heading
        className="text-center"
        size="lg"
        fontWeight="600"
        color="black"
        bold
      >
        Lista de tareas
      </Heading>

      <View onSubmit={handleSubmit}>
        <Input
          placeholder="Describa la tarea..."
          placeholderTextColor="black"
          borderColor="black"
          borderWidth={2}
          bgColor="white"
          _focus={{
            borderColor: "blue.700",
          }}
          onChangeText={setTitle}
          value={title}
          width="90%"
          InputRightElement={
            <Button onPress={handleSubmit} type="submit">
              Crear tarea
            </Button>
          }
        />
      </View>

      <View>
        {tarea.map((item) => (
          <Text>
            <Tareas
              key={item.id}
              item={item}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          </Text>
        ))}
      </View>
    </Center>
  );
};
