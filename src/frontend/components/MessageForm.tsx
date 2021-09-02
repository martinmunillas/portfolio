import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
  TextArea,
} from "@quaantum/components";
import Axios from "axios";
import type { ChangeEventHandler, FormEventHandler } from "react";
import React, { useState } from "react";

interface MessageFormProps {}

const MessageForm: React.FC<MessageFormProps> = () => {
  const init = { name: "", email: "", message: "" };
  const [form, setForm] = useState(init);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError(true);
      return;
    }

    await Axios({
      method: "post",
      url: `/sendMessage`,
      data: form,
    });
    setSuccess(true);
    setForm(init);
  };

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setError(false);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Flex
      as='form'
      direction='column'
      align='flex-end'
      bgColor='#222'
      p='40px'
      br='20px'
      color='white'
      onSubmit={handleSubmit}
    >
      <Heading alignSelf='flex-start'>Leave me a message </Heading>
      <Flex justify='space-between' w='100%'>
        <Flex direction='column' w='48%'>
          <Box as='label'>Name</Box>
          <Input
            name='name'
            onChange={handleChange}
            type='text'
            value={form.name}
          />
          <Box as='label'>Email</Box>
          <Input
            name='email'
            onChange={handleChange}
            type='text'
            value={form.email}
          />
        </Flex>
        <Box>
          <Box as='label'>Message</Box>
          <TextArea
            name='message'
            onChange={handleChange}
            value={form.message}
          />
        </Box>
      </Flex>
      <Button
        type='submit'
        m='20px'
        w='100px'
        h='40px'
        c='white'
        bgColor='blue'
        b='none'
        br='30px'
      >
        Send
      </Button>
      {success && (
        <Text bgColor='green' p='10px' br='10px' mt='15px'>
          Message sent succesfully
        </Text>
      )}
      {error && (
        <Text bgColor='red' p='10px' br='10px' mt='15px'>
          All fields are required
        </Text>
      )}
    </Flex>
  );
};

export default MessageForm;
