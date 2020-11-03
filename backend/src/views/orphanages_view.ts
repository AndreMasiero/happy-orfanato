import Orphanage from "../models/Orphanage";
import imagesView from "./images_view";

export default {
    render(orphanate: Orphanage) {
        return {
            id: orphanate.id,
            name: orphanate.name,
            latitude: orphanate.latitude,
            longitude: orphanate.longitude,
            about: orphanate.about,
            instructions: orphanate.instructions,
            opening_hours: orphanate.opening_hours,
            open_on_weekends: orphanate.open_on_weekends,
            images: imagesView.renderMany(orphanate.images)
        }

    },

    renderMany(orphanates: Orphanage[]) {
        return orphanates.map(orphanate => this.render(orphanate));
    }

}
