// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import MapController from "./map_controller"
application.register("map", MapController)

import ScrollController from "./scroll_controller"
application.register("scroll", ScrollController)

import StarRatingController from "./star_rating_controller"
application.register("star-rating", StarRatingController)
