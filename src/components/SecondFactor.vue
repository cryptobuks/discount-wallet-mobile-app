<template>
    <Page class="page">
        <ActionBar class="action-bar" title="Counter">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
        </ActionBar>

        <StackLayout>
            <Label text="Enter sms code:" />
            <!--<Label :text="$router.query.phoneNumber"/>-->
            <TextField v-model="phoneNumber" hint="Enter sms code." :text="'sms code'"/>
            <Button class="btn btn-primary" @tap="login">Confirm</Button>
        </StackLayout>
    </Page>
</template>

<script>
    export default {
       data() {
           return {
               phoneNumber: "",
               oneTimePassword: ""
           }
       }
    }
</script>
