class Tweet < ApplicationRecord
  belongs_to :user
  def creation_date
    created_at.strftime("%e/%b/%Y") #manera de notar a;os meses y dias stackoverflow
  end
end
