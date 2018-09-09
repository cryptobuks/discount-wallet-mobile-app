<template>
    <Page class="page">
        <ActionBar class="action-bar" title="Home"/>

        <StackLayout>
            <Label text="Phone number" />
            <TextField v-model="phoneNumber" hint="Enter text..." :text="'phoneNumber'"/>
            <Button class="btn btn-primary" @tap="login">Login</Button>
            <!--<Button class="btn btn-primary" @tap="$router.push('/counter')">Counter</Button>-->
            <!--<Button class="btn btn-primary" @tap="$router.push('/hello')">Hello World</Button>-->
        </StackLayout>

    </Page>
</template>
<script>
    import http from '../http/http'
    export default {
        data() {
            return {
                phoneNumber: "",
                surprise: false,
            };
        },
        methods: {
            login() {
                http.initRegistrationByPhoneNumber(this.phoneNumber)
                    .then(result => {
                        console.log(result.data);
                        console.log("redirecting");
                        this.$router.push('/second');
                    }, err => {
                        console.log("ERROR");
                    })
            }
        }
    };
</script>
