import React, { useState } from "react";
import { View, Button, Input, Text } from "native-base";

export const Tareas = ({ item, onUpdate, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const FormEdit = () => {
    const [newValue, setNewValue] = useState(item.title);

    const handleClickUpdate = () => {
      onUpdate(item.id, newValue);
      setIsEdit(false);
    };

    return (
      <>
        <Input
          onChangeText={setNewValue}
          value={newValue}
          borderColor="black"
          borderWidth={2}
          bgColor="white"
          width="md"
          InputRightElement={
            <Button onPress={handleClickUpdate}>Actualizar</Button>
          }
        />
      </>
    );
  };

  const WorkElement = () => {
    return (
      <>
        <Text color="black">
          {item.title}
        </Text>
        <Button onPress={() => setIsEdit(true)}>Editar</Button>{" "}
        <Button onPress={(e) => onDelete(item.id)}>Eliminar</Button>{" "}
      </>
    );
  };

  return (
    <>
      {isEdit ? <FormEdit /> : <WorkElement />}
      {/* <Text>
        <WorkElement />
      </Text> */}
    </>
  );
};
