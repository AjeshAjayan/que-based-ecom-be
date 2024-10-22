import { PublicUser } from "../collections/publicUsers/type/PublicUser"

export type RequestWrapper<Body> = {
    user: PublicUser
    body: Body
}