<script lang="ts">
    import { enhance } from "$app/forms";
    import { ImgOrChar } from "components";

    export let user: App.Regular | App.Admin;
</script>

<div class="user-holder" data-verified={"verified" in user && user.verified}>
    <div class="user-holder-view">
        <ImgOrChar
            src={user.avatar}
            name={"firstName" in user ? user.firstName : ""}
        />
        <span class="user_name">
            {"firstName" in user ? user.firstName : "Admin"}
        </span>
    </div>
    <div class="user-holder-shadow">
        <form method="post" use:enhance action="/signout">
            <button type="submit">
                Выйти
            </button>
        </form>
    </div>
</div>

<style lang="scss">
    .user {
        &-holder {
            position: relative;

            &[data-verified=true] {
                .user-holder-view .user_name {
                    position: relative;
                    padding-right: 20px;
                    &::after {
                        content: "";
                        position: absolute;
                        top: 50%; right: 0;
                        translate: 0 -50%;
                        display: block;
                        width: 20px; height: 20px;
                        background-image: url(/user-verified.svg);
                    }
                }
            }

            &-view,
            &-shadow {
                background-color: #fff;
                border: 1px solid #e2e4e9aa;
                padding: 5px 8px;
                border-radius: 10px;
                display: flex;
            }
            &-view {
                align-items: center;
                position: relative;
                padding-right: 20px;
                gap: 10px;

                &::after {
                    content: '';
                    position: absolute;
                    top: 50%; right: 5px;
                    translate: 0 -50%;
                    width: 10px; height: 5px;
                    background-image: url(/triangle.svg);
                }
            }
            &-shadow {
                position: absolute;
                flex-direction: column;
                width: 100%;
                display: none;

                form {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                }
            }

            &:hover {
                .user-holder-view {
                    border-bottom: 1px solid white;
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0;
                }
                .user-holder-shadow {
                    display: flex;
                    border-top: 1px solid white;
                    border-top-left-radius: 0;
                    border-top-right-radius: 0;
                }
            }
        }
    }
</style>
