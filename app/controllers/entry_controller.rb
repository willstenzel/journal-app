class EntryController < ApplicationController
    def create
        # Relate this to an actaul user
        @entry = Entry.create!(params[:entry])
    end
end
