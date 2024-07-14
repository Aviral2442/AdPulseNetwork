"use client"
import { useState } from "react"
import { Stepper, Button, Group, Container, Text, TextInput, PasswordInput, Checkbox, SimpleGrid } from "@mantine/core"
import React from 'react'
import { Form } from "@mantine/form"
import { useDisclosure } from "@mantine/hooks"
import classes from './publisherSignup.module.css'

const PubSignupForm = () => {
  const [active, setActive] = useState(1)
  const nextStep = () =>
    setActive(current => (current < 3 ? current + 1 : current))
  const prevStep = () =>
    setActive(current => (current > 0 ? current - 1 : current))

  const [visible, { toggle }] = useDisclosure(false)
  return (
    <Container p={0} >
      <Text align="center" weight={700} size="xl" py={20}>
        Begin Your Publishing Journey With Ad Pulse Network
      </Text>
      {/* <Form onSubmit={from}> */}
      <Stepper
        active={active}
        onStepClick={setActive}
        allowNextStepsSelect={false}
        size="xs"
        w={"100%"}
      >
        <Stepper.Step label="General Info." description="">
          <div className={classes.InputBox} >
            <TextInput
              required
              label="First Name"
              placeholder="First Name"
              radius="md"
              py={8}
            />
            <TextInput
              required
              label="Last Name"
              placeholder="Last Name"
              radius="md"
              py={8}
            />
            <TextInput
              required
              label="Email"
              placeholder="Enter your email"
              radius="md"
              py={8}
            />
          </div>
        </Stepper.Step>
        <Stepper.Step label="Details" description="">

          <div className={classes.InputBox} >
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput
                required
                label="Phone No."
                placeholder="Phone number"
                radius="md"
                py={8}
              />
              <TextInput
                required
                label="ID/Number"
                placeholder="Enter your ID number"
                radius="md"
                py={8}
              />
            </SimpleGrid>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput
                required
                label="Country"
                placeholder="Select your country"
                radius="md"
                py={8}
              />
              <TextInput
                required
                label="State"
                placeholder="Select your state"
                radius="md"
                py={8}
              />
            </SimpleGrid>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput
                required
                label="Select Business Category"
                placeholder="Select your business category"
                radius="md"
                py={8}
              />
              <TextInput
                required
                label="Select Messenger"
                placeholder="Select your messenger"
                radius="md"
                py={8}
              />
            </SimpleGrid>
          </div>
        </Stepper.Step>
        <Stepper.Step label="Passowrd" description="">
          <div className={classes.InputBox} >
            <PasswordInput
              label="Password"
              // defaultValue="secret"
              visible={visible}
              onVisibilityChange={toggle}
              py={8}
            />
            <PasswordInput
              label="Confirm password"
              // defaultValue="secret"
              visible={visible}
              onVisibilityChange={toggle}
              py={8}
            />
            <Checkbox label="Keep me logged in" mt="xl" size="md" />
          </div>
        </Stepper.Step>
        <Stepper.Completed>
          <div className={classes.InputBox} >
            <Text align="center" weight={700} size="xl" py={20}>
              Thank you for signing up!
            </Text>
          </div>
        </Stepper.Completed>
      </Stepper>
      {/* </Form> */}
      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>
          Submit step
        </Button>
      </Group>
    </Container>
  )
}

export default PubSignupForm